import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee3miprbq.css';
import '../../css/g/gnsu0ijom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee3miprbq"/><path class="gnsu0ijom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-plus-fill"} {...others} />);
}

export default Component;
