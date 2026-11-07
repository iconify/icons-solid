import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esgn2qmgb.css';
import '../../css/g/g1-qbmafx.css';
import '../../css/u/ul-233bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="esgn2qmgb"/><path class="g1-qbmafx"/><path class="ul-233bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-bold"} {...others} />);
}

export default Component;
