import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tcqy_6v9k.css';
import '../../css/x/x8qf9ab8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tcqy_6v9k"/><path class="x8qf9ab8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-chair"} {...others} />);
}

export default Component;
