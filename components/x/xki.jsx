import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3q-ivb6f {
  fill: var(--svg-color--2a00ff, #2a00ff);
  d: path("M9.097 3H5.613v13.355h3.484v-5.934l5.226 5.934h4.064l-5.806-6.678L17.806 3h-4.064L9.097 8.934zM7.355 21a1.742 1.742 0 1 0 0-3.483a1.742 1.742 0 0 0 0 3.483");
}
</style><path class="i3q-ivb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xki"} {...others} />);
}

export default Component;
