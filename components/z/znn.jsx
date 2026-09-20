import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-mxhbbkg {
  fill: var(--svg-color--00ff65, #00ff65);
  fill-rule: evenodd;
  d: path("M6.375 3h11.25v2.16l-6.868 4.59h6.868V21h-2.036l-6.964-5.962V21h-2.25V9.682l7.037-4.432H6.375zm2.25 9h6.75v5.625z");
}
</style><path clip-rule="evenodd" class="c-mxhbbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:znn"} {...others} />);
}

export default Component;
