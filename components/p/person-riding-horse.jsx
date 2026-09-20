import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da9y1yr3s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="da9y1yr3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-riding-horse"} {...others} />);
}

export default Component;
