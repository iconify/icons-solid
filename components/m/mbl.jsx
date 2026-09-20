import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6fs05qmm {
  d: path("M21 5.813L8.625 8.18v7.74L21 18.187z");
}

.kfo2910sv {
  fill: var(--svg-color--5b449b, #5b449b);
}

.knzib4sih {
  d: path("M3 19.875V4.125l10.125 1.997l-4.5.815l-3.938-.815V17.85l3.938-.788l4.5.788z");
}
</style><g class="kfo2910sv"><path class="knzib4sih"/><path class="b6fs05qmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mbl"} {...others} />);
}

export default Component;
