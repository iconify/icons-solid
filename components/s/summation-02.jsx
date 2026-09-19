import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/por-t0dql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="por-t0dql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:summation-02"} {...others} />);
}

export default Component;
