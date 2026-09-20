import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2o6txvom.css';
import '../../css/s/syec1nbwq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="v2o6txvom"/><path class="syec1nbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbbudget"} {...others} />);
}

export default Component;
