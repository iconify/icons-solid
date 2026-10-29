import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3kvz9f2w.css';
import '../../css/k/kzr2ezdff.css';
import '../../css/y/yeo0byw9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z3kvz9f2w"/><path class="kzr2ezdff"/><path class="yeo0byw9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-sketch"} {...others} />);
}

export default Component;
