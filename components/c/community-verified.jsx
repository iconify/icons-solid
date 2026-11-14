import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhsvm2ywy.css';
import '../../css/g/ghrqsmb5n.css';
import '../../css/g/g6vnjnbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qhsvm2ywy"/><path class="ghrqsmb5n"/><path class="g6vnjnbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:community-verified"} {...others} />);
}

export default Component;
