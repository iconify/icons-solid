import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3x5_inum.css';
import '../../css/w/wx5lbcbct.css';
import '../../css/a/afas8h87o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a3x5_inum"/><path class="wx5lbcbct"/><path class="afas8h87o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:vault-duotone"} {...others} />);
}

export default Component;
