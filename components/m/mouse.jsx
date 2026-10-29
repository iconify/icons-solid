import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iymf6qb3j.css';
import '../../css/v/v5xrdcb0l.css';
import '../../css/q/qnd7fcbei.css';
import '../../css/n/nnp21bc0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iymf6qb3j wm-k"/><path class="v5xrdcb0l wm-k"/><path class="qnd7fcbei wm-k"/><path class="nnp21bc0o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mouse"} {...others} />);
}

export default Component;
