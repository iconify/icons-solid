import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.kb6_9szao {
  stop-color: var(--svg-color--fad961, #fad961);
}

.lmh4whbrs {
  cx: 16px;
  cy: 16px;
  r: 14px;
}

.n9d50l8pz {
  stop-color: var(--svg-color--f76b1c, #f76b1c);
}
</style><defs><linearGradient id="SVGQEg46cmJ" x1="85" x2="85" y1="167" y2="187" gradientTransform="matrix(1.4 0 0 1.4 -103 -231.8)" gradientUnits="userSpaceOnUse"><stop offset="0" class="kb6_9szao"/><stop offset="1" class="n9d50l8pz"/></linearGradient></defs><circle fill="url(#SVGQEg46cmJ)" class="lmh4whbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-kodiak"} {...others} />);
}

export default Component;
