import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag-h2id7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ag-h2id7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-tent-solid"} {...others} />);
}

export default Component;
