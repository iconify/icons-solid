import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px_rdbcpg.css';
import '../../css/u/u4c45h7qw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="px_rdbcpg"/><path class="u4c45h7qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-minus-fill"} {...others} />);
}

export default Component;
