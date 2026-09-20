import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzpv-qb5n.css';
import '../../css/f/fx3jtffrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nzpv-qb5n"/><path class="fx3jtffrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mir"} {...others} />);
}

export default Component;
