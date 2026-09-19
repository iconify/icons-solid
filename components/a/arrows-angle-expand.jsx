import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o942gqbhw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o942gqbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrows-angle-expand"} {...others} />);
}

export default Component;
