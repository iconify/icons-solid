import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae07h2byp.css';
import '../../css/a/a_f7wt5fj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae07h2byp"/><path class="a_f7wt5fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:layer-plus"} {...others} />);
}

export default Component;
