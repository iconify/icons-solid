import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7azckbbx {
  fill: currentColor;
  d: path("M2.616 17.5v-5.538q0-2.244 1.571-3.814t3.818-1.571t3.812 1.57t1.567 3.815V17.5h-2.768v-4.384H12.5v-1.154q0-1.875-1.312-3.188T8 7.462T4.813 8.774T3.5 11.962v1.154h1.885V17.5zm13.961 0V7.346H18.5v-.769h1v.77h1.923V17.5z");
}
</style><path class="a7azckbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:headphones-battery-sharp"} {...others} />);
}

export default Component;
