import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a03587bft.css';
import '../../css/u/ucz71y6rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a03587bft"/><path class="ucz71y6rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-add-02"} {...others} />);
}

export default Component;
