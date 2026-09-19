import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjbvnem1g.css';
import '../../css/p/ppiwk-bdn.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="qjbvnem1g"/><path class="ppiwk-bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:table-fill-16"} {...others} />);
}

export default Component;
