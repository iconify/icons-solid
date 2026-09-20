import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9_oqkbgn {
  fill: var(--svg-color--ffb313, #ffb313);
  d: path("M4.161 3h5.807v4.065H4.16zm0 6.968h9.871v4.064h-9.87zm0 6.968H19.84V21H4.16z");
}
</style><path class="e9_oqkbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:lvl"} {...others} />);
}

export default Component;
