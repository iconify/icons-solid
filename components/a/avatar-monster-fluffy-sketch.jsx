import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h44oajipe.css';
import '../../css/e/ezdj7qokr.css';
import '../../css/a/a__iqxtux.css';
import '../../css/m/mxgtmybcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h44oajipe"/><path class="ezdj7qokr wm-k"/><path class="a__iqxtux wm-k"/><path class="mxgtmybcd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-fluffy-sketch"} {...others} />);
}

export default Component;
