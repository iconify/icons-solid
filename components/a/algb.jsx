import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvo_uyfuo {
  fill: var(--svg-color--5d32ed, #5d32ed);
  d: path("m12 15.442l-8.735 5.03h17.47z");
}

.ft5dv1b6b {
  fill: none;
}

.s7ss5e_ih {
  fill: var(--svg-color--00cab2, #00cab2);
  d: path("M12.265 3.529V14.91L21 19.941z");
}

.ujzigvbth {
  fill: var(--svg-color--b41870, #b41870);
  d: path("M11.735 3.529V14.91L3 19.941z");
}
</style><g class="ft5dv1b6b"><path class="ujzigvbth"/><path class="s7ss5e_ih"/><path class="bvo_uyfuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:algb"} {...others} />);
}

export default Component;
