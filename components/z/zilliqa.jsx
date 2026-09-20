import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz15zbcnl.css';
import '../../css/n/ngd8w9bib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xz15zbcnl"/><path class="ngd8w9bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zilliqa"} {...others} />);
}

export default Component;
