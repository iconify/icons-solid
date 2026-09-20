import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1d6t1hnd {
  fill: var(--svg-color--cf2437, #cf2437);
  d: path("m10.167 3l-5.642 9.845a2.73 2.73 0 0 0-.36 1.474c.03 1.317.882 2.618 2.333 2.618h9.857V21h3.482v-5.224a2.32 2.32 0 0 0-2.321-2.322H8.153L14.19 3.006h-4.023z");
}
</style><path class="h1d6t1hnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mars4"} {...others} />);
}

export default Component;
