import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwqyzxbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cwqyzxbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-many-to-only-one"} {...others} />);
}

export default Component;
