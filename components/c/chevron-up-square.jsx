import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdzi00bpt.css';
import '../../css/l/lml2oc9mw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdzi00bpt"/><path class="lml2oc9mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chevron-up-square"} {...others} />);
}

export default Component;
