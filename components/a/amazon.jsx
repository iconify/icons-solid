import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up97d7kqc.css';
import '../../css/o/or2m_gb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="up97d7kqc"/><path class="or2m_gb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:amazon"} {...others} />);
}

export default Component;
