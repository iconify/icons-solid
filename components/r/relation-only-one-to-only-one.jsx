import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5-sr2nuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5-sr2nuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-only-one-to-only-one"} {...others} />);
}

export default Component;
