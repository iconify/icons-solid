import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ae9eq6qay {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.arudnqcpi {
  fill: var(--svg-color--fcd116, #fcd116);
  d: path("M12 5h12v26H12z");
}

.ibr3y3bbi {
  fill: var(--svg-color--002b7f, #002b7f);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}
</style><path class="ibr3y3bbi"/><path class="arudnqcpi"/><path class="ae9eq6qay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-romania"} {...others} />);
}

export default Component;
