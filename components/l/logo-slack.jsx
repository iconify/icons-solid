import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6pw43byp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o6pw43byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-slack"} {...others} />);
}

export default Component;
