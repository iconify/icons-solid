import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsw5pew7x.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="hsw5pew7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:circle-sm-stroke-16"} {...others} />);
}

export default Component;
