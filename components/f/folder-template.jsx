import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spajzybyt.css';
import '../../css/t/t_5urzb9y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="spajzybyt"/><path class="t_5urzb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-template"} {...others} />);
}

export default Component;
