import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odsay3b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odsay3b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-multiple-blank-circle-outline"} {...others} />);
}

export default Component;
