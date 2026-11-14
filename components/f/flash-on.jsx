import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yoi06dhqc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.726 4.837q.907-.946 2.028-.269q1.122.676.708 1.919l-.592 1.776q-.122.364.103.676q.224.311.608.311h1.909q1.485.001 2.069 1.367q.583 1.365-.444 2.438l-5.841 6.108q-.907.946-2.028.269q-1.122-.676-.708-1.919l.592-1.776q.122-.364-.103-.676q-.224-.311-.608-.311H7.51q-1.485-.001-2.069-1.367q-.583-1.365.444-2.438z");
}
</style><path class="yoi06dhqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:flash-on"} {...others} />);
}

export default Component;
