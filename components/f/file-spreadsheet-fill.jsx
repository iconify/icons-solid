import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvw4nff7k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zvw4nff7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-spreadsheet-fill"} {...others} />);
}

export default Component;
