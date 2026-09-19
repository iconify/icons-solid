import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk-762bui.css';
import '../../css/x/xi6rm2m0g.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="zk-762bui"/><path class="xi6rm2m0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:undo"} {...others} />);
}

export default Component;
