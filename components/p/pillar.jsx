import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1czy_9xl {
  d: path("M9.136 21L5.7 17.625V14.25h9.164V3L18.3 6.375v11.25H9.136z");
}

.ia1c-wqff {
  fill: var(--svg-color--9601d9, #9601d9);
}

.zwce0gsxs {
  d: path("M10.282 5.25H5.7v4.5h4.582z");
}
</style><g class="ia1c-wqff"><path class="c1czy_9xl"/><path class="zwce0gsxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:pillar"} {...others} />);
}

export default Component;
