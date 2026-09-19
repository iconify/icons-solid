import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gf_6gj9cl {
  fill: currentColor;
  d: path("M9.5 7.5v9l7-4.5z");
}

.uo5cf15gm {
  fill: currentColor;
  d: path("M4 18.01h16V5.99H4zM9.5 7.5l7 4.5l-7 4.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xo4-747so {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z");
}
</style><path class="uo5cf15gm"/><path class="gf_6gj9cl"/><path class="xo4-747so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-smart-display"} {...others} />);
}

export default Component;
