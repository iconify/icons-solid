import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gom_4pbjc {
  fill: var(--svg-color--12c6ba, #12c6ba);
  fill-rule: evenodd;
  d: path("M12 12L3 4.2h18zm0 0l-9 7.8h18z");
}
</style><path clip-rule="evenodd" class="gom_4pbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:oxen"} {...others} />);
}

export default Component;
