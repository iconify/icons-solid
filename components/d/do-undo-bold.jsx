import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xum33lbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xum33lbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:do-undo-bold"} {...others} />);
}

export default Component;
