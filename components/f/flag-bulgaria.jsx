import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.fnfhbcb1w {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.i_yyqxbzn {
  fill: var(--svg-color--00966e, #00966e);
  d: path("M0 14h36v8H0z");
}

.qetqtn6tv {
  fill: var(--svg-color--d62612, #d62612);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z");
}
</style><path class="fnfhbcb1w"/><path class="qetqtn6tv"/><path class="i_yyqxbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-bulgaria"} {...others} />);
}

export default Component;
