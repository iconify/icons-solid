import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcay3j-in.css';
import '../../css/s/seqwdcaye.css';
import '../../css/j/jmfazjblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcay3j-in"/><path class="seqwdcaye"/><path class="jmfazjblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:compass"} {...others} />);
}

export default Component;
