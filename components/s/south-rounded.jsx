import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9bh9n56n {
  fill: currentColor;
  d: path("M11.625 21.513q-.175-.063-.325-.213l-5.6-5.6q-.275-.275-.275-.7t.275-.7q.3-.3.713-.287t.687.287l3.9 3.875V3q0-.425.288-.712T12 2t.713.288T13 3v15.175l3.875-3.875q.3-.3.713-.3t.712.3q.275.3.275.713t-.275.687l-5.6 5.6q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="s9bh9n56n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:south-rounded"} {...others} />);
}

export default Component;
