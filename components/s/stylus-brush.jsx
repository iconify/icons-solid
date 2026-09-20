import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6_srwfno {
  fill: currentColor;
  d: path("M12 16q-2.5 0-4.25-1.737T6 9.95Q6 8.1 7.1 6.475t2.413-2.85t2.4-1.925L13 1q0 1.425.513 2.4t1.937 2.075q1.475 1.15 2.013 2.138T18 9.95q0 2.575-1.75 4.313T12 16m-8 5l.55-1.625q.2-.625.725-1T6.45 18h11.1q.65 0 1.175.375t.725 1L20 21z");
}
</style><path class="d6_srwfno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-brush"} {...others} />);
}

export default Component;
