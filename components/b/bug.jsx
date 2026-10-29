import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx5jvdbvp.css';
import '../../css/n/nu888hqea.css';
import '../../css/p/p568a04xi.css';
import '../../css/m/m2lkdo9wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx5jvdbvp"/><path class="nu888hqea"/><path class="p568a04xi"/><path class="m2lkdo9wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bug"} {...others} />);
}

export default Component;
