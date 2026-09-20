import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq0l3cvad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bq0l3cvad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:invoice-text-edit-outline"} {...others} />);
}

export default Component;
