import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1okqdbgr.css';
import '../../css/b/bq-mafblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1okqdbgr"/><path clip-rule="evenodd" class="bq-mafblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hedera-hashgraph"} {...others} />);
}

export default Component;
