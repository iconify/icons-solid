import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egkkoob5g.css';
import '../../css/o/ogb19tc_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="egkkoob5g"/><path class="ogb19tc_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:storybook-dark"} {...others} />);
}

export default Component;
