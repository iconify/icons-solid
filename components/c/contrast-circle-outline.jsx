import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ogk1xcc9f {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q3.35 0 5.675-2.325T20 12q0-1.6-.612-3.062T17.65 6.35l-11.3 11.3q1.125 1.125 2.588 1.738T12 20m0-4v-1.5h5V16zm-4-4.5h1.5v-2h2V8h-2V6H8v2H6v1.5h2z");
}
</style><path class="ogk1xcc9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contrast-circle-outline"} {...others} />);
}

export default Component;
