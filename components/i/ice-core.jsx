import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.om1gqubye {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.25q-4.75 0-4.75 2.25v15q0 2.25 4.75 2.25t4.75-2.25v-15q0-2.25-4.75-2.25m3.25 11.164l-6.5 1.625v-3.917l6.5-1.218zm-6.5 3.172l6.5-1.625V19.5q0 .75-3.25.75t-3.25-.75zm6.5-10.268v2.06l-6.5 1.218V6.318q1.169.432 3.25.432t3.25-.432");
}
</style><path class="om1gqubye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:ice-core"} {...others} />);
}

export default Component;
