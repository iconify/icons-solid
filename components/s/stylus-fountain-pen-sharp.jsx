import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qc1dwc9vi {
  fill: currentColor;
  d: path("M7.675 16h8.65L18.5 7L13 1.925V7.3q.35.25.55.625t.2.825q0 .725-.513 1.238T12 10.5t-1.237-.513t-.513-1.237q0-.45.2-.825T11 7.3V1.925L5.5 7zM4 21l1-3h14l1 3z");
}
</style><path class="qc1dwc9vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-fountain-pen-sharp"} {...others} />);
}

export default Component;
