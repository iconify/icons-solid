import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et1gb0b9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="et1gb0b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:dummy-square-small"} {...others} />);
}

export default Component;
